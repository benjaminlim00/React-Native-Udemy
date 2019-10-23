import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, {title: `Blog Post #${state.length + 1}`}];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({type: 'add_blogpost'});
  };
};

// export const BlogProvider = ({children}) => {
//   const [blogPosts, dispatch] = useReducer(blogReducer, []);

//   // const addBlogPost = () => {
//   //   setBlogPosts([...blogPosts, {title: `Blog Post #${blogPosts.length + 1}`}]);
//   // };

//   return (
//     <BlogContext.Provider value={{data: blogPosts, addBlogPost}}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost},
  [],
);
