import {gql} from 'apollo-server';

export default gql`
    type Query {
        party: Party!
    }
    type Party {
        legalName: String!
        id: URI!
    }
    scalar URI
`;