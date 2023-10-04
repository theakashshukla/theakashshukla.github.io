import clsx from 'clsx';

// import { TypeScriptIcon } from '@/components/Icons';
import { SkeletonSm } from '@/components/wireframes/Skeletons';

interface GithubWireframeProps {
  packageName: string;
  author?: string;
  license?: string;
  repository: string;
  description: string;
  
  // isWithTypeScript?: boolean;
}

function GitHubWireframe({
  packageName ='',
  author = '',
  license = '',
  repository = '',
  description,
  
  // isWithTypeScript = false,
}: GithubWireframeProps) {
  return (
    <div
      className={clsx(
        'h-full w-full bg-white p-4 text-sm text-slate-600',
        'dark:bg-slate-900 dark:text-slate-400'
      )}
    >
      <div className={clsx('flex items-center gap-2 text-lg font-bold')}>
        {packageName}
      </div>
      
      <div className={clsx('mt-4')}>
        <div
          className={clsx(
            'border-divider-light my-4 border-b',
            'dark:border-divider-dark'
          )}
        />
      </div>
      <div className={clsx('flex items-center gap-1')}>
        <div className={clsx('mr-1')}>
          <SkeletonSm />
        </div>
        {author ? (
          <div className={clsx('-mt-0.5 text-blue-700', 'dark:text-blue-500')}>
            {author}
          </div>
        ) : (
          <SkeletonSm w={64} />
        )}
        <div className={clsx('-mt-0.5')}>/</div>
        <div
          className={clsx(
            '-mt-0.5 font-bold text-blue-700',
            'dark:font-semibold dark:text-blue-500'
          )}
        >
          {repository}
        </div>
        <div
          className={clsx(
            'border-divider-light ml-1 rounded-full border px-2 py-0.5 text-xs',
            'dark:border-divider-dark'
          )}
        >
          public
        </div>
      </div>
      <div className={clsx('mt-2')}>
        <p>{description}</p>
      </div>
      <div className={clsx('mt-4 flex flex-col gap-3')}>
        <div className={clsx('flex items-center gap-2')}>
          <SkeletonSm />
          {license ? (
            <div className={clsx('')}>
              <p>{license} license</p>
            </div>
          ) : (
            <SkeletonSm w={64} />
          )}
        </div>
        <div className={clsx('flex items-center gap-3')}>
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={56} />
          </div>
        </div>
      </div>
      
      <div className={clsx('mt-4')}>
        <div className={clsx('mt-4 flex flex-col gap-2')}>
          <SkeletonSm w={400} />
          {/* <SkeletonSm w={200} /> */}
        </div>
        <div
          className={clsx(
            'border-divider-light my-4 border-b',
            'dark:border-divider-dark'
          )}
        />
      </div>
      <div className={clsx('mt-6 flex gap-2')}>
        <div
          className={clsx(
            'border-divider-light flex h-8 flex-1 items-center justify-center rounded-lg border',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={48} />
          </div>
        </div>
        <div
          className={clsx(
            'border-divider-light flex h-8 flex-1 items-center justify-center rounded-lg border',
            'dark:border-divider-dark'
          )}
        >
          <div className={clsx('flex items-center gap-1')}>
            <SkeletonSm />
            <SkeletonSm w={64} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default GitHubWireframe;
