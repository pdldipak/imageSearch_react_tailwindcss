import styled from 'styled-components';
import tw from 'twin.macro';

export const Main = styled.main`
  ${tw`container grid justify-center mx-auto my-4`}& {
    section {
      ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-6 mx-auto`}
    }
  }
`;

// export const Button = styled.button`
//   ${tw`m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}

// `;

