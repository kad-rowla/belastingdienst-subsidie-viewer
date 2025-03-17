// import { logQuads, logRecord } from '@triplyetl/etl/debug'
import { declarePrefix, Etl, fromCsv, Source, toTriplyDb } from '@triplyetl/etl/generic'
import { addHashedIri, iri, literal, pairs, str } from '@triplyetl/etl/ratt'
import { a, sdo, xsd } from '@triplyetl/etl/vocab'
import { executeRules } from '@triplyetl/etl/shacl'

const baseIri = declarePrefix('https://data.pldn.nl/voor-bewoners/aanvragen/')
const id = baseIri.concat('id/')
const def = baseIri.concat('def/')

export default async function (): Promise<Etl> {
  const etl = new Etl({ defaultGraph: 'https://data.pldn.nl/voor-bewoners/aanvragen/graph/default' })
  etl.use(
    fromCsv(Source.url('https://data.pldn.nl/voor-bewoners/aanvragen/assets/64f9c05a4bed0fe68e41a3b1'), { delimiter: ';' }),
    // logRecord(),
    addHashedIri({
      prefix: id,
      content: ['bagId', 'aansluiting', 'datum'],
      key: 'identifier'
    }),
    pairs('identifier',
      [a, iri(def, str('Blokaansluiting'))],
      [iri(def, str('aansluiting')), literal('aansluiting', xsd.string)],
      [sdo.dateCreated, literal('datum', xsd.string)],
      [sdo.status, literal('status', xsd.string)],
      [sdo.identifier, literal('bagId', xsd.string)]
    ),
    executeRules(Source.file('static/model.trig')),
    toTriplyDb({ dataset: 'aanvragen', account: 'voor-bewoners' })
  )
  return etl
}
