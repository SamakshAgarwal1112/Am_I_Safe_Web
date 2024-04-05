import { useState } from 'react';
import { Container, Group, Burger,Box, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import classes from './HeaderSimple.module.css';
import { Image,Badge } from '@mantine/core';

const links = [
  { link: '/github', label: 'Github' },
  { link: '/documentation', label: 'Documentation' },
  { link: '/faqs', label: 'FAQS' },
  { link: '/feeback', label: 'Feedback' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const icon = (
    <Image
    src={'../../src/assets/theme.png'}
    w={'1rem'}
    />
  );

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
      <Container size="md" h={'7rem'} w={'100%'} m={0} p={0} mx={'auto'}>
        <Flex 
        w={'100%'}
        m={0} 
        p={0} 
        pos={'relative'} 
        bottom={0} 
        h={'7rem'} 
        justify={'space-between'} 
        align={'center'}
        gap={'15rem'}
        >
        <Image
        w={'292px'}
        h={'5.5rem'}
        src={'../../src/assets/logo.png'}
        />
        <Flex gap={5} visibleFrom="xs">
          {items}
        </Flex>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        <Badge leftSection={icon} bg={'transparent'} c={'#000'} w={'300px'}>
          Theme
        </Badge>
        </Flex>
      </Container>
  );
}