import { Tr, Td, Text } from "@chakra-ui/react";
import { formatDate } from "../../utils/helper";

function TableDocRow({ data }) {
  const { doc_id, created_at, doc_name } = data;

  return (
    <Tr>
      <Td maxW="250px">
        <Text noOfLines={2}>{doc_id}</Text>
      </Td>

      <Td>
        <Text noOfLines={2}>{doc_name}</Text>
      </Td>
      <Td>
        <Text pb=".5rem">{formatDate(created_at)}</Text>
      </Td>
    </Tr>
  );
}

export default TableDocRow;
