const heading = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', { id: 'heading' }, 'child 1 content'),
    React.createElement('h1', { id: 'heading2' }, 'child 1 content 2'),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', { id: 'heading21' }, 'child 2 content 1'),
    React.createElement('h1', { id: 'heading22' }, 'child 2 content 2'),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);
