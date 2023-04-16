"use client";

import { Children, memo, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "@components/buttons/Button";

interface TableProps {
  header: string[];
  children: JSX.Element;
  hideViewMore?: boolean;
  updatedAt?: number;
}

const Table: React.FC<TableProps> = (props) => {
  let { header, children, hideViewMore, updatedAt } = props;
  const result = Children.toArray(children);
  const [mini, setMini] = useState<boolean>(true);

  const items = useMemo(
    () => result.slice(0, mini ? 4 : undefined),
    [mini, updatedAt]
  );

  const toggleMini = () => {
    setMini((p) => !p);
  };

  return (
    <>
      <table className="w-full table-fixed">
        <thead>
          <tr>
            {header.map((h) => (
              <th
                key={h}
                className={twMerge(
                  "p-2 text-left first-of-type:pl-6 last-of-type:w-16 sm:first-of-type:w-20 md:last-of-type:w-28",
                  hideViewMore && "last:text-center"
                )}
              >
                <label className="font-normal text-secondary-500">{h}</label>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </table>
      {!hideViewMore && (
        <div className="mt-8 flex w-full justify-center">
          <Button
            title={mini ? "View More" : "View Less"}
            icon="BsPlus"
            iconRight
            variant=""
            onClick={toggleMini}
            className="flex items-center justify-center bg-transparent text-primary-500 hover:bg-primary-100"
          />
        </div>
      )}
    </>
  );
};

export default memo(Table);
