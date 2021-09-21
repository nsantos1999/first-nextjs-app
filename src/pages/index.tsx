import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../ProTip";
import Link from "../Link";
import Copyright from "../Copyright";

type Props = {
  name: string;
};

export default function Index({ name }: Props) {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hello {name}
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      name: "Natã",
    },
  };
};
