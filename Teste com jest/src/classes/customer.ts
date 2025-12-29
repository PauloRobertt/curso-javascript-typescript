import {
  IndividualCostumerProtocol,
  EntrepriseCostumerProtocol,
  CustomerOrder,
} from './interface/customer-protocol';

export class IndividualCostumer
  implements IndividualCostumerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EntrepriseCostumer
  implements EntrepriseCostumerProtocol, CustomerOrder
{
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}
