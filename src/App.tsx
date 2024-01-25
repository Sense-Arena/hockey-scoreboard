import { useQuery } from 'react-query';
import './App.css';
import { getScoreboard } from './core/api/scoreboard';
import { wrapAsset } from './core/assets';

export const App = () => {
  const { data } = useQuery('scoreboard', getScoreboard, { refetchInterval: 5000 });

  return (
    <div style={{ background: `url(${wrapAsset('/imgs/compt_bg.jpg')})`, minHeight: '100vh', color: 'var(--text)' }}>
      <div className="top-b-1">
        <span>COMPETITION ENDS TODAY AT 5 PM</span>
      </div>
      <div className="top-b-2">
        <span>NHL SENSE ARENA DRILLS DEMO EVERY ROUND HOUR</span>
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

        <div>
          <div className="content-head">
            <span>RECENT RESULTS</span>
          </div>

          <table>
            <thead>
              <tr>
                <td></td>
                <td className="mwTD"></td>
                <td className="mwTD2"></td>
              </tr>
            </thead>
            <tbody>
              {data?.standings.goalies.recent.map(gt => (
                <tr key={gt.name}>
                  <td>
                    {gt.position}. {gt.name}
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
            <span>RECENT RESULTS</span>
          </div>
          <table>
            <thead>
              <tr>
                <td></td>
                <td className="mwTD"></td>
                <td className="mwTD2"></td>
              </tr>
            </thead>
            <tbody>
              {data?.standings.players.recent.map(gt => (
                <tr key={gt.name}>
                  <td>
                    {gt.position}. {gt.name}
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
