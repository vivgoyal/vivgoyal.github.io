# Card Advisor

A free, private credit card helper that runs entirely in your browser.

- **Which card to use:** type a merchant or pick a category and see each card's points per dollar.
- **Spend analysis:** load CSV statements you download from your issuer. Totals by category are computed on your device.
- **Perks tracker:** see which statement credits you've used, partly used, or not used, and add credits that never post to statements.
- **Verdict:** a keep / may keep / don't keep call for each card, comparing credits and points against the annual fee.
- **New card ideas:** cards from the library ranked by how much of your spending they would beat your current cards on.
- **Offers tracker:** type in the offers you see in your issuer's app and get a reminder when you look up that merchant.

## Privacy

There is no server, no account, and no login. Your cards, spending totals, and entries are stored in your browser (localStorage). Nothing is uploaded. The **Backup and transfer** box in the Wallet tab exports your data as text so you can back it up or move it between devices.

## Use it

Open the site and pick the cards you own. On iPhone, open it in Safari and use **Share > Add to Home Screen**. Add your cards before you add it to the Home Screen only if you plan to use the browser; iOS keeps Home Screen app storage separate from Safari.

## Host it on GitHub Pages

1. Create a **public** repository and upload `index.html`, `cards.js`, and this README. (GitHub Pages on a private repository needs a paid plan.)
2. In the repository, open **Settings > Pages**, choose **Deploy from a branch**, pick `main` and `/ (root)`, and save.
3. After a minute the site is live at `https://YOUR-USERNAME.github.io/REPO-NAME/`.

Never commit an export of your own data to a public repository.

## Add or fix a card

All card data lives in `cards.js`. Each entry has a fee, a points program, reward rates by category, optional caps, a welcome offer, and an optional list of perks. Rates not listed fall back to the card's `travel` rate (for flights, hotels, hotel brands and booking portals) and then to its `other` rate. The notes at the top of the file explain every field.

Please link an issuer page or a reliable source in your pull request, and update `asOf` when you refresh the data. Card terms change often, so the library can be out of date.

## Known limits

- Perks are defined for only some cards. Cards without perks still work for best-card lookups, spend analysis, and verdicts.
- Statement formats differ by issuer. The CSV reader looks for Date, Description, and Amount (or Debit) columns, and credits are recognized by words like "credit" in the description. Tell us if your issuer's file isn't read correctly.
- The verdict counts a set number of points as $1 (100 by default, adjustable) only to compare credits and points with the fee. The rest of the app shows points, not cents.
- No cloud sync. Use export and import to move data between devices.

## Disclaimer

This is not financial advice. Card terms, rates, and offers change, so confirm them with your issuer before you apply or make decisions.

## License

MIT. See `LICENSE`.
