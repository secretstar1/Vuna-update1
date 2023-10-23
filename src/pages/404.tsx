import { NextPage } from "next";
import Head from 'next/head';

import PagesGrid from '../components/PagesGrid';
import ReturnToLinkButton from '../components/ReturnToLinkButton';
import { Heading, useBreakpointValue, Text, Flex } from '@chakra-ui/react';

import { errorPageBgImage } from '../data/pagesBgImages';

const ErrorPage: NextPage = () => {

  return (
    <PagesGrid
      {...errorPageBgImage}
    >
      <Head>
        <title>Vuna Updates | Page Not Found</title>
        <meta name="description" content="Ops! VUNA Updates Page Not Found" />
      </Head>

      <Flex px={4} direction={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
        <Heading
          as='h1'
          textAlign={'center'}
          textTransform={'uppercase'}
          size={useBreakpointValue({ base: 'xl', sm: '2xl' })}
        >
          Page Not Found
        </Heading>

        <Text
          fontWeight={'semibold'}
          fontSize={{ base: 'lg', sm: 'xl' }}
          textAlign={'center'}
        >
          Ops! The page you were looking for doesn't exist.
        </Text>

        <ReturnToLinkButton linkPage='Home' />
      </Flex>
    </PagesGrid>
  );
};

export default ErrorPage;