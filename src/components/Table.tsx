import { Client } from "@/core/Client";
import { EditIcon, TrashIcon } from "@/icons";
import { ButtonAction } from "./ButtonAction";

interface TableProps {
  clients: Client[];
  clientSelected?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

export function Table({ clients, clientSelected, clientDeleted }: TableProps) {
  const showActions = clientSelected || clientDeleted;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions && <th className="p-4">Ações</th>}
      </tr>
    );
  }

  function renderData() {
    return clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions && renderActions(client)}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {clientSelected && (
          <>
            <ButtonAction onClick={() => clientSelected?.(client)!}
              color="green"
            >{EditIcon}</ButtonAction>
          </>
        )}
        {clientDeleted && (
          <>
            <ButtonAction onClick={() => clientDeleted?.(client)!}
              color="red"
            >{TrashIcon}</ButtonAction>
          </>
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className="
            text-gray-100 
            bg-gradient-to-r from-purple-500 to-purple-800
        "
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
