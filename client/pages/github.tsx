import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { AiFillAlert, AiOutlineCode, AiOutlineGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const github = ({
  data,
  pinnedItems,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { id, followers, public_repos } = data;

  // console.log(pinnedItems[0].node);

  return (
    <div className="p-3 space-y-4">
      <div className="text-center">
        <h5>
          <span className="font-bold"> Github Id:</span> {id}
        </h5>
        <h5>
          <span className="font-bold"> Followers:</span> {followers}
        </h5>
        <h5>
          <span className="font-bold"> Public Repos:</span> {public_repos}
        </h5>
      </div>
      <div>
        <h4 className="font-bold text-center">Pinnded Repositories</h4>
        <hr />
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="grid gap-2 p-2 mx-auto mt-2 md:w-9/12 lg:grid-cols-2 md:p-8 lg:p-2 lg:w-11/12"
        >
          {pinnedItems.map((item: any, index: number) => (
            <motion.div
              variants={variants}
              className="relative flex flex-col justify-between p-2 bg-gray-800"
              key={index}
            >
              <div>
                <h4 className="flex items-center gap-2">
                  <AiFillAlert />
                  {item.node.name.toUpperCase()}
                </h4>
                <p>{item.node.description}</p>
              </div>
              <div>
                <Link href={item.node.url}>
                  <a
                    target="_blank"
                    className="flex items-center justify-end gap-1 p-1 bg-gray-600 "
                  >
                    <AiOutlineGithub />
                    {item.node.primaryLanguage.name}
                  </a>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  //REST API
  const res = await fetch("https://api.github.com/users/syedfawzulazim");
  const data = await res.json();

  //graphQL
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const Qdata = await client.query({
    query: gql`
      {
        user(login: "syedfawzulazim") {
          id
          url
          pinnedItems(first: 6) {
            totalCount
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  projectsUrl
                  url
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const { user } = Qdata.data;
  const pinnedItems = user.pinnedItems.edges.map((node: any) => node);
  //console.log(pinnedItems);
  return {
    props: { data: data, pinnedItems: pinnedItems },
  };
};

export default github;
