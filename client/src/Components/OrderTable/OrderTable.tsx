import { Order, StatusParserProps } from "@/Pages/OrderPage/utils";
import { getOrderList } from "@/Services/OrderPageServices";
import { formatElapsedTime } from "@/utils/utils";
import { useState } from "react";
import { Contact } from "../Contacts/Contacts";

import "./OrderTable.css";
import { Drawer } from "vaul";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Filter, Plus, Sort } from "../IconSet";

const OrderTable = () => {
  const [orders] = useState<Order[]>(getOrderList());
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [sortOrder, _] = useState<"asc" | "desc">("desc");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchTerm("");
  };

  const handleRowCheck = (orderID: string) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(orderID)
        ? prevSelectedRows.filter((id) => id !== orderID)
        : [...prevSelectedRows, orderID]
    );
  };

  const filteredOrderDetails = orders.filter((order) => {
    const statusText = JSON.parse(order.status).text.toLowerCase();
    return (
      order.orderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.contact.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      statusText.includes(searchTerm.toLowerCase())
    );
  });

  const sortedOrders = [...filteredOrderDetails].sort((a, b) => {
    const dateA = new Date(a.timestamp).getTime();
    const dateB = new Date(b.timestamp).getTime();

    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  const currentOrders = sortedOrders;

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(orders.map((order) => order.orderID));
    }
    setSelectAll(!selectAll);
  };

  const window = useWindowSize();
  const handleRowClick = (order: Order) => {
    if (window > 600) return;

    setSelectedOrder(order);
    setIsDrawerOpen(true);
  };
  return (
    <>
      <div className="table-controls">
        <div>
          <button className="table-controls-button">
            <Plus />
          </button>
          <button className="table-controls-button">
            <Filter />
          </button>
          <button className="table-controls-button">
            <Sort />
          </button>
        </div>

        <form
          role="search"
          className="order-search-form"
          onSubmit={handleSubmit}
        >
          <input
            type="search"
            id="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </form>
      </div>
      <table className="order-table">
        <thead className="table-header">
          <tr>
            <th className="ot-head">
              <input
                type="checkbox"
                className="order-table-checkbox mt-2 mr-2 "
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th className="ot-head cell-collapse">Order ID</th>
            <th className="ot-head ">User</th>
            <th className="ot-head">Project</th>
            <th className="ot-head cell-collapse">Address</th>
            <th className="ot-head cell-collapse">Date</th>
            <th className="ot-head ">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.orderID} onClick={() => handleRowClick(order)}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedRows.includes(order.orderID)}
                  onChange={() => handleRowCheck(order.orderID)}
                  className="ot-cell mt-2 mr-2 order-table-checkbox"
                />
              </td>
              <td className="cell-collapse ">{order.orderID}</td>
              <td>
                <Contact
                  name={order.contact.username}
                  src={order.contact.profileUrl}
                />
              </td>
              <td>{order.project}</td>
              <td className="cell-collapse">{order.address}</td>
              <td className="cell-collapse">
                {formatElapsedTime(order.timestamp)}
              </td>
              <td>
                <StatusParser status={order.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Drawer.Root open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50" />
          <Drawer.Content className="ot-drawer-content">
            <div className="p-4 rounded-t-[10px] flex-1">
              <div className="py-4">
                <Drawer.Title className="text-[18px] flex justify-between items-center font-semibold mb-4">
                  <span>Order Details</span>{" "}
                  <span>{selectedOrder?.orderID}</span>
                </Drawer.Title>
                {selectedOrder && (
                  <div className="flex flex-col items-start gap-2">
                    <p>Project: {selectedOrder.project}</p>
                    <p>Address: {selectedOrder.address}</p>
                    <p>Date: {formatElapsedTime(selectedOrder.timestamp)}</p>

                    <StatusButton status={selectedOrder.status} />
                  </div>
                )}
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
};

const StatusButton = ({ status }: StatusParserProps) => {
  const { text, color } = JSON.parse(status);

  return (
    <button
      className="h-[32px] w-full rounded-md my-4"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

const StatusParser = ({ status }: StatusParserProps) => {
  const { text, color } = JSON.parse(status);

  return (
    <div
      style={{
        color,
        display: "flex",
        alignItems: "center",
        gap: "var(--gap-xs)",
      }}
    >
      {text}
    </div>
  );
};

export default OrderTable;
