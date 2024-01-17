import { declarePrefix, Etl, fromCsv, Source, toTriplyDb } from '@triplyetl/etl/generic';
import { addHashedIri, iri, literal, pairs, str } from '@triplyetl/etl/ratt';
import { a, sdo, xsd } from '@triplyetl/etl/vocab';
import { executeRules } from '@triplyetl/etl/shacl';
const baseIri = declarePrefix('https://data.pldn.nl/voor-bewoners/aanvragen/');
const id = baseIri.concat('id/');
const def = baseIri.concat('def/');
export default async function () {
    const etl = new Etl({ defaultGraph: 'https://data.pldn.nl/voor-bewoners/aanvragen/graph/default' });
    etl.use(fromCsv(Source.url('https://data.pldn.nl/Lexi/aanvragen/assets/65a7a812da72a36d72113894'), { delimiter: ';' }), addHashedIri({
        prefix: id,
        content: ['bagId', 'aansluiting', 'datum'],
        key: 'identifier'
    }), pairs('identifier', [a, iri(baseIri, str('Blokaansluiting'))], [iri(def, str('aansluiting')), literal('aansluiting', xsd.string)], [sdo.dateCreated, literal('datum', xsd.string)], [sdo.status, literal('status', xsd.string)], [sdo.identifier, literal('bagId', xsd.string)]), executeRules(Source.file('static/model.trig')), toTriplyDb({ dataset: 'aanvragen', account: 'Lexi' }));
    return etl;
}
//# sourceMappingURL=main.js.map