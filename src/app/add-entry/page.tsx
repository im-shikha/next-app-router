export default function AddEntryForm() {
  return (
    <div className="rounded-lg bg-gray-50 p-6 text-gray-900">
      <h2 className="mb-4 text-lg font-semibold">Add Entry</h2>

      <form className="space-y-4">
        <div>
          <label htmlFor="date" className="mb-1 block text-gray-700">
            Date
          </label>
          <input id="date" type="date" className="w-full rounded border p-2" />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-gray-700">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="income" className="mb-1 block text-gray-700">
            Income
          </label>
          <input
            id="income"
            type="number"
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="expense" className="mb-1 block text-gray-700">
            Expense
          </label>
          <input
            id="expense"
            type="number"
            className="w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="balance" className="mb-1 block text-gray-700">
            Balance
          </label>
          <input
            id="balance"
            type="number"
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Entry
        </button>
      </form>
    </div>
  );
}
