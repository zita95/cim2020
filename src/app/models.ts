export interface DataObject {
  created: string;
  descriiption: string;
  id: string;
  labels?: string[];
  modified: string;
  name: string;
  object_marking_refs: string[];
  type: string;
  identity_class?: string;
  sectors?: string[];
  created_by_ref?: string;
  definition_type?: string;
  first_seen?: string;
  external_references?: ExternalRefs[];
  kill_chain_phases?: KillChains[];
  pattern?: string;
  valid_from?: string;
  relationship_type?: string;
  source_ref?: string;
  target_ref?: string
}

export interface ExternalRefs {
  source_name: string;
  description?: string;
  external_id?: string;
  url?:string
}

export interface KillChains {
  kill_chain_name: string;
  phase_name: string
}

export interface Data {
  status_code: number;
  data: any[]
}