import { useState } from "react";
import { Client } from "@/core/Client";
import { Button } from "./Button";
import { Input } from "./Input";

interface FormProps {
  client: Client;
  handleClientChange?: (client: Client) => void;
  handleCancel?: () => void;
}

export function Form({ client, handleCancel, handleClientChange }: FormProps) {
  const id = client?.id ?? null;
  const [name, setName] = useState(client?.name ?? "");
  const [age, setAge] = useState(client?.age ?? 0);

  return (
    <div>
      {id && <Input value={id} label="Código" readOnly className="mb-4" />}
      <Input
        name="name"
        value={name}
        label="nome"
        onChange={setName}
        className="mb-4"
      />
      <Input name="age" value={age} label="idade" type="number" onChange={setAge} />
      <div className="flex justify-end mt-3">
        <Button
          onClick={() => handleClientChange?.(new Client(name, +age, id))}
          className="mr-2"
          color="blue"
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={handleCancel}>Cancelar</Button>
      </div>
    </div>
  );
}
