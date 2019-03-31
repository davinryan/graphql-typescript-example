export default {
    Query: {
        testMessage: (): string => {
            return 'Hello World!';
        },
        party: (): any => {
            return {
                legalName: 'party name'
            }
        }
    }
};