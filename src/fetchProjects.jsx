import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

// create instance
const client = createClient({
  space: 'z5o6j50ee2nm',
  // master is default you also can skip it
  environment: 'master',
  accessToken: import.meta.env.VITE_API_KEY,
});

//console.log(client);

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: 'test' });
        //console.log(response);
        //console.log(response.items[0].fields);
        // console.log(response.items[0].fields.url); //url
        // console.log(response.items[0].fields.title); //title
        // console.log(response.items[0].fields.image.fields.file); //image
        const projects = response.items.map((el) => {
          const { title, url, image } = el.fields;
          const id = el.sys.id;
          const img = image.fields.file.url;
          return { title, url, id, img };
        });

        setProjects(projects);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, []);
  //console.log(projects);

  return { loading, projects };
};

export default useFetchProjects;
