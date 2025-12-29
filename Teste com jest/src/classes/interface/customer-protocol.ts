export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCostumerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EntrepriseCostumerProtocol {
  name: string;
  cnpj: string;
}
