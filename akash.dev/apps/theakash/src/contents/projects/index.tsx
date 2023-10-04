import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon, NpmIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'edu' | 'biz' | 'edu1'>(
    'biz'
  );

  return (
    <>
      <SectionTitle
        title="The dynamic accent colors."
        caption="Sass Projects"
        description="Add accent colors for dynamic, flexible color use in your Tailwind CSS project."
        button={{
          title: 'learn more',
          href: 'https://github.com/theakashshukla',
        }}
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Phec"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Idea Rating & Feedback by AI"
                active={currentState === 'biz'}
                onClick={() => setCurrentState('biz')}
              />
              <SectionButton
                title="OPN"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="College Searching Career Guidance Platform"
                active={currentState === 'edu'}
                onClick={() => setCurrentState('edu')}
              />
              <SectionButton
                title="E-Sence"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="College & Attendence Mangement System"
                active={currentState === 'edu1'}
                onClick={() => setCurrentState('edu1')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'theakashshukla/phec',
                      isActive: currentState === 'biz',
                    },
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'theakashshukla/opn',
                      isActive: currentState === 'edu',
                    },
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'theakashshukla/e-sence',
                      isActive: currentState === 'edu1',
                    },
                  ]}
                >
                  {currentState === 'biz' && (
                    <GitHubWireframe
                      packageName="Phec- Idea Rating AI"
                      author="theakashshukla"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      license="MIT"
                      repository="phec"
                      
                    />
                  )}
                  {currentState === 'edu' && (
                    <GitHubWireframe
                      packageName="OPN - College Searching Career Guidance Platform"
                      description="Adds accent colors for more dynamic and flexible color utilization."
                      author='theakashshukla'
                      license='MIT'
                      repository='opn'
                    />
                  )}
                  {currentState === 'edu1' && (
                    <GitHubWireframe
                      packageName="E-Sence - College & Attendence Mangement System"
                      // write best description for my college project
                      description='A CMS for college to manage attendence, student, teacher, and other stuff.'
                      author='theakashshukla'
                      license='MIT'
                      repository='esence'
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
