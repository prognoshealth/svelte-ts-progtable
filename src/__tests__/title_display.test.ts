import { render } from "@testing-library/svelte";
import ProgTable from "../components/ProgTable.svelte";

describe("Should display title on page when specified in configuration", () => {
  test("simple example", () => {
    const title: string = "Example Title";
    const table = render(ProgTable, { title: title });
    expect(table).not.toBeUndefined();
    expect(table).not.toBeNull();
    table.findAllByText(title).then((results) => {
      expect(results).toHaveLength(1);
    });
  });
  test("example with bad characters", () => {
    const title: string = "Example Title <dangerous/> </p>";
    const table = render(ProgTable, { title: title });
    expect(table).not.toBeUndefined();
    expect(table).not.toBeNull();
    table.findAllByText(title).then((results) => {
      expect(results).toHaveLength(1);
      //console.log(results[0].textContent);
    });
  });
});
