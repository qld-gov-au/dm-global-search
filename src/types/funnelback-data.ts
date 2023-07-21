export interface Response {
    curator : {
        exhibits: Array<any>;
    }
    resultPacket : {
        query: {
            searchTerm : string,
            currStart: string,
            currEnd : string,
            totalMatching : string
        };
        resultsSummary: {
            currStart : number
            currEnd: number
            totalMatching : number
        };
        results: Array<any>;
    }
}
