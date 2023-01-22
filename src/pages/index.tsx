import { Button } from "@/components/Button";
import { Form } from "@/components/Form";
import { Layout } from "@/components/Layout";
import { Table } from "@/components/Table";
import { useClients } from "@/hooks/useClients";

export default function Home() {

  const {
    tableVisible,
    clients,
    client,
    clientDeleted,
    clientSelected,
    newClient,
    showTable,
    saveClient } = useClients()
    
    return (
    <div
      className="text-white bg-gradient-to-r from-blue-500 to-purple-500
    h-screen flex justify-center items-center"
    >
      <Layout title="Cadastro Simples">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button onClick={newClient} color="green" className="mb-4">
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Form
            client={client}
            handleClientChange={saveClient}
            handleCancel={() => showTable}
          />
        )}
      </Layout>
    </div>
  );
}
