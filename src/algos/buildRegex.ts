const buildRegex = (terms: string[]) => {
    const regexFields = terms.map(term => term.replace(/\s/gi, '\\s*')).join('|');
    const regexString = `\\b#?(${regexFields})\\b`;
    return new RegExp(regexString);
  };
export default buildRegex;