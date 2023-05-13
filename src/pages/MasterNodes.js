import SingleMasterNode from '../components/SingleMasterNode';

const masterNodes = [
  {
    id: 1,
    name: 'Master Node 1',
    status: 'connected',
    variant: 'success',
  },
  {
    id: 2,
    name: 'Master Node 2',
    status: 'disconnected',
    variant: 'danger',
  },
  {
    id: 3,
    name: 'Master Node 3',
    status: 'disconnected',
    variant: 'danger',
  },
  {
    id: 4,
    name: 'Master Node 4',
    status: 'disconnected',
    variant: 'danger',
  },
];

const MasterNodes = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h1 className="page-title">Master Nodes</h1>
          <div className="title-underline"></div>
        </div>

        {/* progress bars */}
        <div className="masternodes row" style={{ rowGap: '1rem' }}>
          {masterNodes.map((node) => {
            return <SingleMasterNode key={node.id} node={node} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default MasterNodes;
