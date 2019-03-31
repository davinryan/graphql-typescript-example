import { gql } from 'apollo-server';

export default gql`
    type Query {
        "Test Message"
        testMessage: String!
        
        "Parties"
        party: Party
    },
    type Party {
        legalName: String
    }
`;