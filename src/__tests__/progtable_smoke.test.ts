import ProgTable from "../components/ProgTable.svelte";
import { render, fireEvent } from "@testing-library/svelte";

describe("should display an empty table", () => {
  it("when nothing is passed in", async () => {
    const table = render(ProgTable);
    expect(table).not.toBeUndefined();
    expect(table).not.toBeNull();
  });
});
