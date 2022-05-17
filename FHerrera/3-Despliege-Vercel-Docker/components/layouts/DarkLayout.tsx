import { FC } from 'react';
// import * as React from 'react';
type Props = { children: React.ReactNode };

export const DarkLayout: FC<Props> = ( { children }) => {
// export const DarkLayout: FC = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children } 
        </div>
    </div>
  );
};
