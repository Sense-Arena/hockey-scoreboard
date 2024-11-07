import { useQuery } from 'react-query';
import './App.css';
import { getScoreboard } from './core/api/scoreboard';

export const App = () => {
  const { data } = useQuery('scoreboard', getScoreboard, { refetchInterval: 5000 });

  return (
    <div style={{ minHeight: '100vh', color: 'var(--text)' }}>
      <div className="top-b-1">
        <span>COMPETITION ENDS ON SATURDAY AT 4 PM</span>
      </div>

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
                <td className="mwTD">saves</td>
                <td className="mwTD2">reaction time</td>
              </tr>
            </thead>
            <tbody>
              {data?.standings.goalies.top.map((gt, index) => (
                <tr key={gt.name}>
                  <td>
                    {index + 1}. {gt.name}
                  </td>
                  <td className="mwTD">{gt.score}</td>
                  <td className="mwTD2">{gt.reaction_time.toFixed(3)}</td>
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
                <td className="mwTD">goals</td>
                <td className="mwTD2">reaction time</td>
              </tr>
            </thead>
            <tbody>
              {data?.standings.players.top.map((gt, index) => (
                <tr key={gt.name}>
                  <td>
                    {index + 1}. {gt.name}
                  </td>
                  <td className="mwTD">{gt.score}</td>
                  <td className="mwTD2">{gt.reaction_time.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
