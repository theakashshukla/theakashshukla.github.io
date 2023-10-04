import clsx from 'clsx';

import WithTableOfContentsMock from '@/components/layouts/WithTableOfContentsMock';


function WithReactions() {
  return (
    <div
      className={clsx(
        'pointer-events-none sticky bottom-8 z-[902] mt-16',
        'lg:bottom-8 lg:mt-24',
        'fm:static'
      )}
    >
      <WithTableOfContentsMock>
        <div
          className={clsx(
            'mx-auto max-w-[360px] px-4',
            'sm:max-w-[420px] sm:px-0'
          )}
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        
        </div>
      </WithTableOfContentsMock>
    </div>
  );
}

export default WithReactions;
