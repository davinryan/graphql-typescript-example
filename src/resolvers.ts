import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';

const URI = new GraphQLScalarType({
    name: 'URI',
    description: 'Universal resource identifier',
    serialize(value) {
        return value;
    },
    parseValue(value) {
        return value;
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.STRING) {
            return ast.value;
        }
        return null;
    }
});

const parties: any[] = [
    {
        id: 'https://localhost:4001/party/1',
        legalName: 'party 1'

    }
];

const serviceContracts = [
    {

    }
];

export default {
    Query: {
        party: (): any => {
            // if (id) {
            //     return parties.filter((party) => {
            //         if (party.id === id) {
            //             return party;
            //         }
            //     });
            // } else {
                return parties[0];
            // }
        },
        serviceContract: (): any => {
            return serviceContracts[0]
        }
    },
    URI
};