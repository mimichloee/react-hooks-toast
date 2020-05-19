import React, { useCallback } from 'react';
import { useToast } from '../../src';

function Container () {
  const { infoToast } = useToast();

  const handleClick = useCallback(() => {
    infoToast(<div>info!!</div>);
  }, []);

  return (
    <>
      <button onClick={handleClick}>Toast1</button>
    </>
  );
}

export default Container;
