"use client";

import {
  Box,
  Container,
  Flex,
  Text,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";

import React, { useState, useEffect } from "react";

import budsImage from '@/public/gracebuds.png'

const Links = ["Dashboard", "Projects", "Team"];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [bg, setBg] = useState("transparent");

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setBg(
      window.scrollY > 50
        ? useColorModeValue("whiteAlpha.900", "gray.800")
        : "transparent"
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      zIndex="1000"
      transition="background-color 0.3s"
      as="nav"
      position="fixed"
      bg={bg}
      w="100%"
      top="0"
      left="0"
      right="0"
      boxShadow="sm"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        justify="space-between"
        align="center"
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        color="#fff"
      >
          <Image as={'span'} src={budsImage} />
        <Stack direction="row" spacing={6}>
          <Link href="/about" color={useColorModeValue("gray.800", "white")}>
            About
          </Link>
          <Link href="/services" color={useColorModeValue("gray.800", "white")}>
            Services
          </Link>
          <Link href="/contact" color={useColorModeValue("gray.800", "white")}>
            Contact
          </Link>
        </Stack>
      </Flex>
    </Box>
  );
}
