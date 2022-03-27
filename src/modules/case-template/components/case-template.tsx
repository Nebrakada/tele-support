import { Container, Table } from '@mantine/core';
import { useTemplateFields } from '../hooks';
import { TableRow } from './table-row';

export const CaseTemplate = () => {
  const { data } = useTemplateFields();
  const rows = data?.filter(({ parentId }) => !parentId) ?? [];

  return (
    <Container mt={20}>
      <Table striped highlightOnHover>
        <thead>
          <tr>
            <th>Liczba porządkowa</th>
            <th>Nazwa</th>
            <th>Typ</th>
            <th>Pole wymagane</th>
            <th>Pole widoczne</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((fieldTemplate) => (
            <TableRow key={fieldTemplate.id} {...fieldTemplate} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};