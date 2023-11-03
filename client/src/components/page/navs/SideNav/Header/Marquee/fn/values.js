import { cycle, session } from '@Utils/campaign';

const electionYear = () => {
    let y = new Date().getFullYear();
    return y % 2 ? y + 1 : y;
  },
  daysApart = (a, b) =>
    // h/t https://rb.gy/74tdu @https://rb.gy/5ea22
    Math.floor(
      (Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) -
        Date.UTC(a.getFullYear(), a.getMonth(), a.getDate())) /
        (1000 * 60 * 60 * 24)
    ),
  nth = (n) =>
    // h/t https://rb.gy/tkjmg @https://rb.gy/lh2jk
    ['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th',
  daysUntilElectionDay = daysApart(
    new Date(),
    new Date(
      cycle(new Date(cycle(new Date()).setFullYear(electionYear())))
    )
  ),
  congressOrdinal = session() + nth(session());

export { congressOrdinal, daysUntilElectionDay };
