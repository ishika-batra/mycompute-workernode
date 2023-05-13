import { HiSignalSlash } from 'react-icons/hi2';
import { TfiSignal } from 'react-icons/tfi';
import { useState } from 'react';

const SingleMasterNode = ({ node }) => {
  const [connected, setConnected] = useState(node.status === 'connected');

  const handleStatusChange = () => {
    setConnected(!connected);
    node.status = connected ? 'Disconnected' : 'Connected';
  };

  return (
    <div className="col-sm-6 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{node.name}</h3>
          <p className="card-text">
            <span className="icon">
              {connected ? (
                <TfiSignal size={20} fill="green" />
              ) : (
                <HiSignalSlash size={20} fill="red" />
              )}
            </span>
            &nbsp;{node.status}
          </p>
          <button
            onClick={handleStatusChange}
            className="btn btn-primary"
            style={{ backgroundColor: `${connected ? 'red' : 'green'}` }}
          >
            {connected ? 'Disconnect' : 'Connect'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default SingleMasterNode;
