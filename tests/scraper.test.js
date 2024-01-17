const { scrapingGoogleSearch } = require ('../src/scraper')

var prompt_default = "Ligue de sport Franche Comté";

test('Récupération des liens du moteur de recherche', () => {
    const result = scrapingGoogleSearch(prompt_default);
    expect(Array.isArray(result)).toBe(true);
});