import MainApp from './App';
import { createRoot } from "react-dom/client";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<MainApp />);
  root.unmount();
});


// import { render, screen } from '@testing-library/react';
// import ReactDom from 'react-dom';
// import React from 'react';

// test('renders learn react link', () => {
//   const div = documentElement('div');
//   ReactDom.render(<MainApp />, div);
//   ReactDom.unmountComponentAtNode(div);
// });


// test('renders learn react link', () => {
//   render(<MainApp />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


