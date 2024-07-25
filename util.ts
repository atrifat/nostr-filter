export const hasSubstring = (text: string, wordCandidates: string[] = []): boolean => {
    const query = text;
    let _hasSubstring = false;
    for (let index = 0; index < wordCandidates.length; index++) {
        const wordCandidate = wordCandidates[index];
        if (query.includes(wordCandidate)) {
            _hasSubstring = true;
            break;
        }
    }
    return _hasSubstring;
}

export async function sleepPromise(duration: number) {
    return new Promise(r => setTimeout(r, duration));
}