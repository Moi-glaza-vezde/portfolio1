import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { TabMenu, TabStatusType } from './tabMenu/TabMenu';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';

import socialImg from '../../../assets/images/proj-1.png';
import timerImg from '../../../assets/images/proj-2.png';
import { Container } from '../../../components/Container';
import { S } from './Works_Styles';

import { AnimatePresence, motion } from 'framer-motion';

//const tabsItems = ['All', 'landing page', 'React', 'spa'];
const tabsItems: Array<{ status: TabStatusType; title: string }> = [
   {
      title: 'All',
      status: 'all',
   },
   {
      title: 'landing page',
      status: 'landing',
   },
   {
      title: 'React',
      status: 'react',
   },
   {
      title: 'spa',
      status: 'spa',
   },
];
const worksData = [
   {
      id: 1,
      src: socialImg,
      title: 'Social Network',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'spa',
   },
   {
      id: 2,
      src: timerImg,
      title: 'Timer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'react',
   },
   {
      id: 3,
      src: socialImg,
      title: 'Social Network',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'spa',
   },
   {
      id: 4,
      src: timerImg,
      title: 'Timer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'react',
   },
   {
      id: 5,
      src: socialImg,
      title: 'Social Network',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'spa',
   },
   {
      id: 6,
      src: timerImg,
      title: 'Timer',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'react',
   },
];

export const Works: React.FC = () => {
   const [currentFilterStatus, SetCurrentFilterStatus] = useState('all');
   let filteredWorks = worksData;

   if (currentFilterStatus === 'landing') {
      filteredWorks = worksData.filter((work) => work.type === 'landing');
   }
   if (currentFilterStatus === 'react') {
      filteredWorks = worksData.filter((work) => work.type === 'react');
   }
   if (currentFilterStatus === 'spa') {
      filteredWorks = worksData.filter((work) => work.type === 'spa');
   }

   function changeFilterStatus(value: TabStatusType) {
      SetCurrentFilterStatus(value);
   }
   return (
      <S.Works id={'works'}>
         <Container>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu
               currentFilterStatus={currentFilterStatus}
               tabsItems={tabsItems}
               changeFilterStatus={changeFilterStatus}
            />
            <FlexWrapper justify={'center'} align={'flex-start'} wrap={'wrap'}>
               <AnimatePresence>
                  {filteredWorks.map((w, index) => {
                     return (
                        <motion.div
                           style={{ width: '400px', flexGrow: 1, maxWidth: '540px' }}
                           layout={true}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           key={w.id}>
                           <Work key={w.id} src={w.src} title={w.title} text={w.text} />
                        </motion.div>
                     );
                  })}
               </AnimatePresence>
            </FlexWrapper>
         </Container>
      </S.Works>
   );
};
