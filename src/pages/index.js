import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Forms from '../components/Forms';
import Comments from '../components/Comments';
import Posts from '../components/Posts';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts />
    <Comments />
  </Layout>
);

export default IndexPage;
