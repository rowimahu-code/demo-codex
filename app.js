const defaultInventory = [
  {
    codigo: "C001",
    descripcion: "DETERGENTE DE USO DOMESTICO X 2 KILOS MARCA SAPOLIO",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 5,
    cantidadAyaviri: 7,
    cantidadTotal: 12,
    precioCarta: 25.0,
    precioOfertado: 25.0,
  },
  {
    codigo: "C002",
    descripcion: "LEJIA DE USO DOMESTICO X GALON MARCA KAZ",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 10,
    cantidadAyaviri: 14,
    cantidadTotal: 24,
    precioCarta: 13.0,
    precioOfertado: 13.0,
  },
  {
    codigo: "C003",
    descripcion: "ALCOHOL MEDICINAL DE 70º X LITRO MARCA PORTUGAL",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 10,
    cantidadAyaviri: 14,
    cantidadTotal: 24,
    precioCarta: 10.0,
    precioOfertado: 10.0,
  },
  {
    codigo: "C004",
    descripcion: "JABON LIQUIDO DE 3.8 LITROS MARCA KAZ",
    unidad: "GALON",
    tipo: "CORRIENTE",
    cantidadNunoa: 4,
    cantidadAyaviri: 6,
    cantidadTotal: 10,
    precioCarta: 36.0,
    precioOfertado: 36.0,
  },
  {
    codigo: "C006",
    descripcion: "LAVAVAJILLA DE 900 ML MARCA AYUDIN",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 6,
    cantidadAyaviri: 8,
    cantidadTotal: 14,
    precioCarta: 15.0,
    precioOfertado: 15.0,
  },
  {
    codigo: "C009",
    descripcion: "PAPEL TOALLA MEGAROLLO INTERFOLEADO MARCA NOVA",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 87,
    cantidadAyaviri: 112,
    cantidadTotal: 199,
    precioCarta: 3.0,
    precioOfertado: 3.0,
  },
  {
    codigo: "C010",
    descripcion: "PH ELITE S&R DH 40X2 GH",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 90,
    cantidadAyaviri: 115,
    cantidadTotal: 205,
    precioCarta: 1.2,
    precioOfertado: 1.2,
  },
  {
    codigo: "C005",
    descripcion: "JABON LIQUIDO ANTIBACTERIAL MARCA KAZ",
    unidad: "LITRO",
    tipo: "CORRIENTE",
    cantidadNunoa: 2,
    cantidadAyaviri: 2,
    cantidadTotal: 4,
    precioCarta: 12.0,
    precioOfertado: 12.0,
  },
  {
    codigo: "C011",
    descripcion:
      "PAÑOS ABSORBENTES O MULTIUSOS ( 5 COLORES) MARCA BESTLOVE",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 5,
    cantidadAyaviri: 5,
    cantidadTotal: 10,
    precioCarta: 2.0,
    precioOfertado: 2.0,
  },
  {
    codigo: "C012",
    descripcion: "ESPONJA (2 COLORES) MARCA DKASA",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 2,
    cantidadAyaviri: 2,
    cantidadTotal: 4,
    precioCarta: 2.0,
    precioOfertado: 2.0,
  },
  {
    codigo: "C013",
    descripcion: "ESPONJA FIBRA VERDE MARCA DKASA",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 3,
    cantidadAyaviri: 3,
    cantidadTotal: 6,
    precioCarta: 2.0,
    precioOfertado: 2.0,
  },
  {
    codigo: "C014",
    descripcion: "GUANTES DE JEBE MARCA DKASA",
    unidad: "PAR",
    tipo: "CORRIENTE",
    cantidadNunoa: 2,
    cantidadAyaviri: 2,
    cantidadTotal: 4,
    precioCarta: 10.0,
    precioOfertado: 10.0,
  },
  {
    codigo: "C015",
    descripcion: "ROLLO DE PAPEL TOALLA X 200 M MARCA  NOVA",
    unidad: "UNIDAD",
    tipo: "CORRIENTE",
    cantidadNunoa: 3,
    cantidadAyaviri: 3,
    cantidadTotal: 6,
    precioCarta: 16.0,
    precioOfertado: 16.0,
  },
  {
    codigo: "C016",
    descripcion:
      "PAQUETE X 50 UND DE BOLSAS PLASTICO NEGRA X 25 L MARCA NORTEÑITA",
    unidad: "PAQUETE X 50",
    tipo: "CORRIENTE",
    cantidadNunoa: 5,
    cantidadAyaviri: 7,
    cantidadTotal: 12,
    precioCarta: 10.0,
    precioOfertado: 20.0,
  },
  {
    codigo: "C017",
    descripcion:
      "PAQUETE X 50 UND DE BOLSAS PLASTICO NEGRA X 75 L MARCA NORTEÑITA",
    unidad: "PAQUETE X 50",
    tipo: "CORRIENTE",
    cantidadNunoa: 1,
    cantidadAyaviri: 1,
    cantidadTotal: 2,
    precioCarta: 17.0,
    precioOfertado: 17.0,
  },
  {
    codigo: "C018",
    descripcion:
      "CAJA X 100 UND DE TOCA REDECILLA (DESCARTABLE) MARCA LABORTECH",
    unidad: "CAJA X 100",
    tipo: "CORRIENTE",
    cantidadNunoa: 0,
    cantidadAyaviri: 0,
    cantidadTotal: 0,
    precioCarta: 18.0,
    precioOfertado: 18.0,
  },
  {
    codigo: "C019",
    descripcion:
      "CAJA X 50 UND DE MASCARILLA (QUIRURJICA 3 PLIEGUES) MARCA BENDI C",
    unidad: "CAJA X 50",
    tipo: "CORRIENTE",
    cantidadNunoa: 6,
    cantidadAyaviri: 9,
    cantidadTotal: 15,
    precioCarta: 15.0,
    precioOfertado: 15.0,
  },
  {
    codigo: "C020",
    descripcion:
      "CAJA X 100 UND DE CUBRE ZAPATOS (DESCARTABLE) MARCA LABORTECH",
    unidad: "CAJA X 100",
    tipo: "CORRIENTE",
    cantidadNunoa: 3,
    cantidadAyaviri: 3,
    cantidadTotal: 6,
    precioCarta: 24.0,
    precioOfertado: 24.0,
  },
  {
    codigo: "C021",
    descripcion: "CAJA X 50 PARES DE GUANTES VINILO MARCA MAKETO",
    unidad: "CAJA X 50",
    tipo: "CORRIENTE",
    cantidadNunoa: 4,
    cantidadAyaviri: 6,
    cantidadTotal: 10,
    precioCarta: 30.0,
    precioOfertado: 30.0,
  },
];

const STORAGE_KEY = "inventario-limpieza";

const inventoryBody = document.getElementById("inventory-body");
const form = document.getElementById("inventory-form");
const searchInput = document.getElementById("search");
const formStatus = document.getElementById("form-status");
const editIndexInput = document.getElementById("edit-index");
const cancelEditButton = document.getElementById("cancel-edit");
const resetButton = document.getElementById("reset-data");
const statItems = document.getElementById("stat-items");
const statTotal = document.getElementById("stat-total");
const statPrice = document.getElementById("stat-price");

const fields = {
  codigo: document.getElementById("codigo"),
  descripcion: document.getElementById("descripcion"),
  unidad: document.getElementById("unidad"),
  tipo: document.getElementById("tipo"),
  cantidadNunoa: document.getElementById("cantidadNunoa"),
  cantidadAyaviri: document.getElementById("cantidadAyaviri"),
  cantidadTotal: document.getElementById("cantidadTotal"),
  precioCarta: document.getElementById("precioCarta"),
  precioOfertado: document.getElementById("precioOfertado"),
};

const loadInventory = () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return [...defaultInventory];
  }
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [...defaultInventory];
  } catch (error) {
    return [...defaultInventory];
  }
};

const saveInventory = (items) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

let inventory = loadInventory();

const formatCurrency = (value) =>
  new Intl.NumberFormat("es-PE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const updateTotalField = () => {
  const nunoa = Number(fields.cantidadNunoa.value || 0);
  const ayaviri = Number(fields.cantidadAyaviri.value || 0);
  fields.cantidadTotal.value = nunoa + ayaviri;
};

const clearForm = () => {
  form.reset();
  editIndexInput.value = "";
  formStatus.textContent = "Nuevo registro";
  updateTotalField();
};

const fillForm = (item, index) => {
  Object.entries(fields).forEach(([key, input]) => {
    input.value = item[key];
  });
  editIndexInput.value = index;
  formStatus.textContent = `Editando ${item.codigo}`;
  updateTotalField();
};

const renderStats = (items) => {
  const totalUnits = items.reduce(
    (sum, item) => sum + Number(item.cantidadTotal || 0),
    0,
  );
  const totalPrice = items.reduce(
    (sum, item) => sum + Number(item.precioOfertado || 0),
    0,
  );
  statItems.textContent = String(items.length);
  statTotal.textContent = String(totalUnits);
  statPrice.textContent = formatCurrency(totalPrice);
};

const renderTable = (items) => {
  inventoryBody.innerHTML = "";
  if (!items.length) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    cell.colSpan = 10;
    cell.textContent = "No hay artículos para mostrar.";
    cell.classList.add("empty");
    row.appendChild(cell);
    inventoryBody.appendChild(row);
    renderStats(items);
    return;
  }

  items.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.codigo}</td>
      <td>${item.descripcion}</td>
      <td>${item.unidad}</td>
      <td>${item.tipo}</td>
      <td>${item.cantidadNunoa}</td>
      <td>${item.cantidadAyaviri}</td>
      <td>${item.cantidadTotal}</td>
      <td>S/ ${formatCurrency(item.precioCarta)}</td>
      <td>S/ ${formatCurrency(item.precioOfertado)}</td>
      <td>
        <div class="row-actions">
          <button class="secondary" data-action="edit" data-index="${index}">
            Editar
          </button>
          <button class="secondary" data-action="delete" data-index="${index}">
            Eliminar
          </button>
        </div>
      </td>
    `;
    inventoryBody.appendChild(row);
  });
  renderStats(items);
};

const handleSubmit = (event) => {
  event.preventDefault();
  updateTotalField();
  const payload = Object.entries(fields).reduce((acc, [key, input]) => {
    acc[key] = input.type === "number" ? Number(input.value) : input.value;
    return acc;
  }, {});

  const duplicateIndex = inventory.findIndex(
    (item, index) =>
      item.codigo.toLowerCase() === payload.codigo.toLowerCase() &&
      String(index) !== editIndexInput.value,
  );
  if (duplicateIndex !== -1) {
    window.alert("El código ya existe. Usa un código distinto.");
    return;
  }

  const editIndex = editIndexInput.value;
  if (editIndex !== "") {
    inventory[Number(editIndex)] = payload;
  } else {
    inventory.unshift(payload);
  }

  saveInventory(inventory);
  clearForm();
  renderTable(filterInventory(searchInput.value));
};

const filterInventory = (query) => {
  if (!query) {
    return inventory;
  }
  const normalized = query.toLowerCase();
  return inventory.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(normalized),
    ),
  );
};

const handleTableClick = (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }
  const index = Number(button.dataset.index);
  const action = button.dataset.action;

  if (action === "edit") {
    fillForm(inventory[index], index);
    return;
  }

  if (action === "delete") {
    const confirmed = window.confirm(
      `¿Seguro que deseas eliminar ${inventory[index].codigo}?`,
    );
    if (!confirmed) {
      return;
    }
    inventory.splice(index, 1);
    saveInventory(inventory);
    renderTable(filterInventory(searchInput.value));
    clearForm();
  }
};

form.addEventListener("submit", handleSubmit);
inventoryBody.addEventListener("click", handleTableClick);
cancelEditButton.addEventListener("click", clearForm);
searchInput.addEventListener("input", (event) => {
  renderTable(filterInventory(event.target.value));
});
fields.cantidadNunoa.addEventListener("input", updateTotalField);
fields.cantidadAyaviri.addEventListener("input", updateTotalField);
resetButton.addEventListener("click", () => {
  inventory = [...defaultInventory];
  saveInventory(inventory);
  clearForm();
  renderTable(filterInventory(searchInput.value));
});

updateTotalField();
renderTable(inventory);
