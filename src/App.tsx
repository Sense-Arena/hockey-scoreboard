import { useQuery } from 'react-query';
import './App.css';
import { getScoreboard } from './core/api/scoreboard';

export const App = () => {
  const { data } = useQuery('scoreboard', getScoreboard, { refetchInterval: 5000 });

  return (
    <div style={{ minHeight: '100vh', color: 'var(--text)' }}>
      <div className="content-container">
        <div>
          <div className="content-head">
            <span className="content-head-red">Goalies</span>
            <span>CURRENT LEADERBORD</span>
          </div>

          <table>
            <thead>
              <tr>
                <td></td>
                <td className="mwTD"> SV%</td>
                <td className="mwTD2">ANG%</td>
              </tr>
            </thead>
            <tbody>
              {data?.standings.goalies.top.map((gt, index) => (
                <tr key={gt.name}>
                  <td>
                    {index + 1}. {gt.name}
                  </td>
                  <td className="mwTD">{gt.score_1}</td>
                  <td className="mwTD2">{gt.score_2.toFixed(0)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <div className="content-head">
            <span className="content-head-red">Players</span>
            <span>CURRENT LEADERBORD</span>
          </div>

          <table>
            <thead>
              <tr>
                <td></td>
                <td className="mwTD">DM%</td>
                <td className="mwTD2">RLT</td>
              </tr>
            </thead>
            <tbody>
              {data?.standings.players.top.map((gt, index) => (
                <tr key={gt.name}>
                  <td>
                    {index + 1}. {gt.name}
                  </td>
                  <td className="mwTD">{gt.score_1}</td>
                  <td className="mwTD2">{gt.score_2.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
