// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.33.0
// 	protoc        v3.21.12
// source: contracts/contract.proto

package contracts_pb

import (
	ir "github.com/unpackdev/protos/dist/go/ir"
	sources "github.com/unpackdev/protos/dist/go/sources"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// Represents details of a contract.
type Contract struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Uuid              string `protobuf:"bytes,1,opt,name=uuid,proto3" json:"uuid,omitempty"`                                                    // Unique identifier for the contract.
	NetworkId         int64  `protobuf:"varint,2,opt,name=network_id,json=networkId,proto3" json:"network_id,omitempty"`                        // Network ID associated with the contract.
	Name              string `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`                                                    // Name of the contract.
	Address           string `protobuf:"bytes,4,opt,name=address,proto3" json:"address,omitempty"`                                              // Address of the contract.
	License           string `protobuf:"bytes,5,opt,name=license,proto3" json:"license,omitempty"`                                              // License associated with the contract.
	Language          string `protobuf:"bytes,6,opt,name=language,proto3" json:"language,omitempty"`                                            // Programming language used for the contract.
	ExecutionBytecode string `protobuf:"bytes,7,opt,name=execution_bytecode,json=executionBytecode,proto3" json:"execution_bytecode,omitempty"` // Execution bytecode of the contract.
	DeployedBytecode  string `protobuf:"bytes,8,opt,name=deployed_bytecode,json=deployedBytecode,proto3" json:"deployed_bytecode,omitempty"`    // Deployed bytecode of the contract.
	BlockNumber       int64  `protobuf:"varint,9,opt,name=block_number,json=blockNumber,proto3" json:"block_number,omitempty"`                  // Block number where the contract was deployed.
	BlockHash         string `protobuf:"bytes,10,opt,name=block_hash,json=blockHash,proto3" json:"block_hash,omitempty"`                        // Hash of the block where the contract was deployed.
	TransactionHash   string `protobuf:"bytes,11,opt,name=transaction_hash,json=transactionHash,proto3" json:"transaction_hash,omitempty"`      // Transaction hash of the contract deployment.
	Verified          bool   `protobuf:"varint,12,opt,name=verified,proto3" json:"verified,omitempty"`                                          // Indicates if the contract is verified.
	CompilerVersion   string `protobuf:"bytes,13,opt,name=compiler_version,json=compilerVersion,proto3" json:"compiler_version,omitempty"`      // Version of the compiler used.
	EvmVersion        string `protobuf:"bytes,14,opt,name=evm_version,json=evmVersion,proto3" json:"evm_version,omitempty"`                     // Version of the EVM used.
	SolgoVersion      string `protobuf:"bytes,15,opt,name=solgo_version,json=solgoVersion,proto3" json:"solgo_version,omitempty"`               // Version of the Solgo, used to decompile contract.
	Optimized         bool   `protobuf:"varint,16,opt,name=optimized,proto3" json:"optimized,omitempty"`                                        // Indicates if the contract is optimized.
	OptimizationRuns  int32  `protobuf:"varint,17,opt,name=optimization_runs,json=optimizationRuns,proto3" json:"optimization_runs,omitempty"`  // Number of optimization runs.
	// List of possible contract types associated.
	PossibleContractTypes []string `protobuf:"bytes,18,rep,name=possible_contract_types,json=possibleContractTypes,proto3" json:"possible_contract_types,omitempty"`
	// Total number of contracts discovered in the IR.
	ContractsCount int32 `protobuf:"varint,19,opt,name=contracts_count,json=contractsCount,proto3" json:"contracts_count,omitempty"`
	// List of Ethereum Improvement Proposals (EIPs) associated with this IR.
	Standards []*ir.EIP `protobuf:"bytes,20,rep,name=standards,proto3" json:"standards,omitempty"`
	// Metadata URLs associated with the contract.
	MetadataUrls []string `protobuf:"bytes,21,rep,name=metadata_urls,json=metadataUrls,proto3" json:"metadata_urls,omitempty"`
	// Implementations associated with the contract.
	Implementations []*ProxyImplementation `protobuf:"bytes,22,rep,name=implementations,proto3" json:"implementations,omitempty"`
	// Constructor details of the contract.
	Constructor *Constructor `protobuf:"bytes,23,opt,name=constructor,proto3" json:"constructor,omitempty"`
	// Indicates if the contract has vulnerabilities.
	HasVulnerabilities bool `protobuf:"varint,24,opt,name=has_vulnerabilities,json=hasVulnerabilities,proto3" json:"has_vulnerabilities,omitempty"`
	// Metrics of vulnerabilities associated with the contract.
	VulnerabilityMetrics []*VulnerabilityMetric `protobuf:"bytes,25,rep,name=vulnerability_metrics,json=vulnerabilityMetrics,proto3" json:"vulnerability_metrics,omitempty"`
	// Vulnerabilities associated with the contract.
	Vulnerabilities []*Vulnerability `protobuf:"bytes,26,rep,name=vulnerabilities,proto3" json:"vulnerabilities,omitempty"`
	// ABI of the contract in raw JSON format.
	Abi             string           `protobuf:"bytes,27,opt,name=abi,proto3" json:"abi,omitempty"`
	Sources         *sources.Sources `protobuf:"bytes,28,opt,name=sources,proto3" json:"sources,omitempty"`
	IsProxy         bool             `protobuf:"varint,29,opt,name=is_proxy,json=isProxy,proto3" json:"is_proxy,omitempty"`
	SelfDestructed  bool             `protobuf:"varint,30,opt,name=self_destructed,json=selfDestructed,proto3" json:"self_destructed,omitempty"`
	ProcessedStates []string         `protobuf:"bytes,31,rep,name=processed_states,json=processedStates,proto3" json:"processed_states,omitempty"`
	FailedStates    []string         `protobuf:"bytes,32,rep,name=failed_states,json=failedStates,proto3" json:"failed_states,omitempty"`
	Processed       bool             `protobuf:"varint,33,opt,name=processed,proto3" json:"processed,omitempty"`
	Partial         bool             `protobuf:"varint,34,opt,name=partial,proto3" json:"partial,omitempty"`
}

func (x *Contract) Reset() {
	*x = Contract{}
	if protoimpl.UnsafeEnabled {
		mi := &file_contracts_contract_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Contract) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Contract) ProtoMessage() {}

func (x *Contract) ProtoReflect() protoreflect.Message {
	mi := &file_contracts_contract_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Contract.ProtoReflect.Descriptor instead.
func (*Contract) Descriptor() ([]byte, []int) {
	return file_contracts_contract_proto_rawDescGZIP(), []int{0}
}

func (x *Contract) GetUuid() string {
	if x != nil {
		return x.Uuid
	}
	return ""
}

func (x *Contract) GetNetworkId() int64 {
	if x != nil {
		return x.NetworkId
	}
	return 0
}

func (x *Contract) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Contract) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Contract) GetLicense() string {
	if x != nil {
		return x.License
	}
	return ""
}

func (x *Contract) GetLanguage() string {
	if x != nil {
		return x.Language
	}
	return ""
}

func (x *Contract) GetExecutionBytecode() string {
	if x != nil {
		return x.ExecutionBytecode
	}
	return ""
}

func (x *Contract) GetDeployedBytecode() string {
	if x != nil {
		return x.DeployedBytecode
	}
	return ""
}

func (x *Contract) GetBlockNumber() int64 {
	if x != nil {
		return x.BlockNumber
	}
	return 0
}

func (x *Contract) GetBlockHash() string {
	if x != nil {
		return x.BlockHash
	}
	return ""
}

func (x *Contract) GetTransactionHash() string {
	if x != nil {
		return x.TransactionHash
	}
	return ""
}

func (x *Contract) GetVerified() bool {
	if x != nil {
		return x.Verified
	}
	return false
}

func (x *Contract) GetCompilerVersion() string {
	if x != nil {
		return x.CompilerVersion
	}
	return ""
}

func (x *Contract) GetEvmVersion() string {
	if x != nil {
		return x.EvmVersion
	}
	return ""
}

func (x *Contract) GetSolgoVersion() string {
	if x != nil {
		return x.SolgoVersion
	}
	return ""
}

func (x *Contract) GetOptimized() bool {
	if x != nil {
		return x.Optimized
	}
	return false
}

func (x *Contract) GetOptimizationRuns() int32 {
	if x != nil {
		return x.OptimizationRuns
	}
	return 0
}

func (x *Contract) GetPossibleContractTypes() []string {
	if x != nil {
		return x.PossibleContractTypes
	}
	return nil
}

func (x *Contract) GetContractsCount() int32 {
	if x != nil {
		return x.ContractsCount
	}
	return 0
}

func (x *Contract) GetStandards() []*ir.EIP {
	if x != nil {
		return x.Standards
	}
	return nil
}

func (x *Contract) GetMetadataUrls() []string {
	if x != nil {
		return x.MetadataUrls
	}
	return nil
}

func (x *Contract) GetImplementations() []*ProxyImplementation {
	if x != nil {
		return x.Implementations
	}
	return nil
}

func (x *Contract) GetConstructor() *Constructor {
	if x != nil {
		return x.Constructor
	}
	return nil
}

func (x *Contract) GetHasVulnerabilities() bool {
	if x != nil {
		return x.HasVulnerabilities
	}
	return false
}

func (x *Contract) GetVulnerabilityMetrics() []*VulnerabilityMetric {
	if x != nil {
		return x.VulnerabilityMetrics
	}
	return nil
}

func (x *Contract) GetVulnerabilities() []*Vulnerability {
	if x != nil {
		return x.Vulnerabilities
	}
	return nil
}

func (x *Contract) GetAbi() string {
	if x != nil {
		return x.Abi
	}
	return ""
}

func (x *Contract) GetSources() *sources.Sources {
	if x != nil {
		return x.Sources
	}
	return nil
}

func (x *Contract) GetIsProxy() bool {
	if x != nil {
		return x.IsProxy
	}
	return false
}

func (x *Contract) GetSelfDestructed() bool {
	if x != nil {
		return x.SelfDestructed
	}
	return false
}

func (x *Contract) GetProcessedStates() []string {
	if x != nil {
		return x.ProcessedStates
	}
	return nil
}

func (x *Contract) GetFailedStates() []string {
	if x != nil {
		return x.FailedStates
	}
	return nil
}

func (x *Contract) GetProcessed() bool {
	if x != nil {
		return x.Processed
	}
	return false
}

func (x *Contract) GetPartial() bool {
	if x != nil {
		return x.Partial
	}
	return false
}

var File_contracts_contract_proto protoreflect.FileDescriptor

var file_contracts_contract_proto_rawDesc = []byte{
	0x0a, 0x18, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x74,
	0x72, 0x61, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x75, 0x6e, 0x70, 0x61,
	0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x1a,
	0x0c, 0x69, 0x72, 0x2f, 0x65, 0x69, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1d, 0x63,
	0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x76, 0x75, 0x6c, 0x6e, 0x65, 0x72, 0x61,
	0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2f, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63,
	0x74, 0x6f, 0x72, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x15, 0x63, 0x6f, 0x6e, 0x74, 0x72,
	0x61, 0x63, 0x74, 0x73, 0x2f, 0x70, 0x72, 0x6f, 0x78, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x14, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2f, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x83, 0x0b, 0x0a, 0x08, 0x43, 0x6f, 0x6e, 0x74, 0x72,
	0x61, 0x63, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x75, 0x75, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x75, 0x75, 0x69, 0x64, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x65, 0x74, 0x77, 0x6f,
	0x72, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x6e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x49, 0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x12, 0x18, 0x0a, 0x07, 0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x12, 0x1a,
	0x0a, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x12, 0x2d, 0x0a, 0x12, 0x65, 0x78,
	0x65, 0x63, 0x75, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x65, 0x78, 0x65, 0x63, 0x75, 0x74, 0x69, 0x6f,
	0x6e, 0x42, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x64, 0x65, 0x70,
	0x6c, 0x6f, 0x79, 0x65, 0x64, 0x5f, 0x62, 0x79, 0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x08,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x64, 0x65, 0x70, 0x6c, 0x6f, 0x79, 0x65, 0x64, 0x42, 0x79,
	0x74, 0x65, 0x63, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f,
	0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x18, 0x09, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x62, 0x6c,
	0x6f, 0x63, 0x6b, 0x4e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x62, 0x6c, 0x6f,
	0x63, 0x6b, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62,
	0x6c, 0x6f, 0x63, 0x6b, 0x48, 0x61, 0x73, 0x68, 0x12, 0x29, 0x0a, 0x10, 0x74, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x0b, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x48,
	0x61, 0x73, 0x68, 0x12, 0x1a, 0x0a, 0x08, 0x76, 0x65, 0x72, 0x69, 0x66, 0x69, 0x65, 0x64, 0x18,
	0x0c, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x76, 0x65, 0x72, 0x69, 0x66, 0x69, 0x65, 0x64, 0x12,
	0x29, 0x0a, 0x10, 0x63, 0x6f, 0x6d, 0x70, 0x69, 0x6c, 0x65, 0x72, 0x5f, 0x76, 0x65, 0x72, 0x73,
	0x69, 0x6f, 0x6e, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x63, 0x6f, 0x6d, 0x70, 0x69,
	0x6c, 0x65, 0x72, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x65, 0x76,
	0x6d, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x65, 0x76, 0x6d, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x73,
	0x6f, 0x6c, 0x67, 0x6f, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x0f, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x73, 0x6f, 0x6c, 0x67, 0x6f, 0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e,
	0x12, 0x1c, 0x0a, 0x09, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x69, 0x7a, 0x65, 0x64, 0x18, 0x10, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x09, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x69, 0x7a, 0x65, 0x64, 0x12, 0x2b,
	0x0a, 0x11, 0x6f, 0x70, 0x74, 0x69, 0x6d, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x72,
	0x75, 0x6e, 0x73, 0x18, 0x11, 0x20, 0x01, 0x28, 0x05, 0x52, 0x10, 0x6f, 0x70, 0x74, 0x69, 0x6d,
	0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x75, 0x6e, 0x73, 0x12, 0x36, 0x0a, 0x17, 0x70,
	0x6f, 0x73, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74,
	0x5f, 0x74, 0x79, 0x70, 0x65, 0x73, 0x18, 0x12, 0x20, 0x03, 0x28, 0x09, 0x52, 0x15, 0x70, 0x6f,
	0x73, 0x73, 0x69, 0x62, 0x6c, 0x65, 0x43, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x54, 0x79,
	0x70, 0x65, 0x73, 0x12, 0x27, 0x0a, 0x0f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x13, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0e, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x2f, 0x0a, 0x09,
	0x73, 0x74, 0x61, 0x6e, 0x64, 0x61, 0x72, 0x64, 0x73, 0x18, 0x14, 0x20, 0x03, 0x28, 0x0b, 0x32,
	0x11, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x69, 0x72, 0x2e, 0x45,
	0x49, 0x50, 0x52, 0x09, 0x73, 0x74, 0x61, 0x6e, 0x64, 0x61, 0x72, 0x64, 0x73, 0x12, 0x23, 0x0a,
	0x0d, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x75, 0x72, 0x6c, 0x73, 0x18, 0x15,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x55, 0x72,
	0x6c, 0x73, 0x12, 0x52, 0x0a, 0x0f, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x18, 0x16, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74,
	0x73, 0x2e, 0x50, 0x72, 0x6f, 0x78, 0x79, 0x49, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x0f, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x6d, 0x65, 0x6e, 0x74,
	0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x42, 0x0a, 0x0b, 0x63, 0x6f, 0x6e, 0x73, 0x74, 0x72,
	0x75, 0x63, 0x74, 0x6f, 0x72, 0x18, 0x17, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x20, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74,
	0x73, 0x2e, 0x43, 0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72, 0x52, 0x0b, 0x63,
	0x6f, 0x6e, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x6f, 0x72, 0x12, 0x2f, 0x0a, 0x13, 0x68, 0x61,
	0x73, 0x5f, 0x76, 0x75, 0x6c, 0x6e, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x69, 0x65,
	0x73, 0x18, 0x18, 0x20, 0x01, 0x28, 0x08, 0x52, 0x12, 0x68, 0x61, 0x73, 0x56, 0x75, 0x6c, 0x6e,
	0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x69, 0x65, 0x73, 0x12, 0x5d, 0x0a, 0x15, 0x76,
	0x75, 0x6c, 0x6e, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x5f, 0x6d, 0x65, 0x74,
	0x72, 0x69, 0x63, 0x73, 0x18, 0x19, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x28, 0x2e, 0x75, 0x6e, 0x70,
	0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73,
	0x2e, 0x56, 0x75, 0x6c, 0x6e, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x4d, 0x65,
	0x74, 0x72, 0x69, 0x63, 0x52, 0x14, 0x76, 0x75, 0x6c, 0x6e, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c,
	0x69, 0x74, 0x79, 0x4d, 0x65, 0x74, 0x72, 0x69, 0x63, 0x73, 0x12, 0x4c, 0x0a, 0x0f, 0x76, 0x75,
	0x6c, 0x6e, 0x65, 0x72, 0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x69, 0x65, 0x73, 0x18, 0x1a, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x22, 0x2e, 0x75, 0x6e, 0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e,
	0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x2e, 0x56, 0x75, 0x6c, 0x6e, 0x65, 0x72,
	0x61, 0x62, 0x69, 0x6c, 0x69, 0x74, 0x79, 0x52, 0x0f, 0x76, 0x75, 0x6c, 0x6e, 0x65, 0x72, 0x61,
	0x62, 0x69, 0x6c, 0x69, 0x74, 0x69, 0x65, 0x73, 0x12, 0x10, 0x0a, 0x03, 0x61, 0x62, 0x69, 0x18,
	0x1b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x61, 0x62, 0x69, 0x12, 0x34, 0x0a, 0x07, 0x73, 0x6f,
	0x75, 0x72, 0x63, 0x65, 0x73, 0x18, 0x1c, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x75, 0x6e,
	0x70, 0x61, 0x63, 0x6b, 0x2e, 0x76, 0x31, 0x2e, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x2e,
	0x53, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73, 0x52, 0x07, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x73,
	0x12, 0x19, 0x0a, 0x08, 0x69, 0x73, 0x5f, 0x70, 0x72, 0x6f, 0x78, 0x79, 0x18, 0x1d, 0x20, 0x01,
	0x28, 0x08, 0x52, 0x07, 0x69, 0x73, 0x50, 0x72, 0x6f, 0x78, 0x79, 0x12, 0x27, 0x0a, 0x0f, 0x73,
	0x65, 0x6c, 0x66, 0x5f, 0x64, 0x65, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x65, 0x64, 0x18, 0x1e,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x0e, 0x73, 0x65, 0x6c, 0x66, 0x44, 0x65, 0x73, 0x74, 0x72, 0x75,
	0x63, 0x74, 0x65, 0x64, 0x12, 0x29, 0x0a, 0x10, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65,
	0x64, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73, 0x18, 0x1f, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0f,
	0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53, 0x74, 0x61, 0x74, 0x65, 0x73, 0x12,
	0x23, 0x0a, 0x0d, 0x66, 0x61, 0x69, 0x6c, 0x65, 0x64, 0x5f, 0x73, 0x74, 0x61, 0x74, 0x65, 0x73,
	0x18, 0x20, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0c, 0x66, 0x61, 0x69, 0x6c, 0x65, 0x64, 0x53, 0x74,
	0x61, 0x74, 0x65, 0x73, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65,
	0x64, 0x18, 0x21, 0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73,
	0x65, 0x64, 0x12, 0x18, 0x0a, 0x07, 0x70, 0x61, 0x72, 0x74, 0x69, 0x61, 0x6c, 0x18, 0x22, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x07, 0x70, 0x61, 0x72, 0x74, 0x69, 0x61, 0x6c, 0x42, 0x3c, 0x5a, 0x3a,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x75, 0x6e, 0x70, 0x61, 0x63,
	0x6b, 0x64, 0x65, 0x76, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x73, 0x2f, 0x64, 0x69, 0x73, 0x74,
	0x2f, 0x67, 0x6f, 0x2f, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x3b, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x73, 0x5f, 0x70, 0x62, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var (
	file_contracts_contract_proto_rawDescOnce sync.Once
	file_contracts_contract_proto_rawDescData = file_contracts_contract_proto_rawDesc
)

func file_contracts_contract_proto_rawDescGZIP() []byte {
	file_contracts_contract_proto_rawDescOnce.Do(func() {
		file_contracts_contract_proto_rawDescData = protoimpl.X.CompressGZIP(file_contracts_contract_proto_rawDescData)
	})
	return file_contracts_contract_proto_rawDescData
}

var file_contracts_contract_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_contracts_contract_proto_goTypes = []interface{}{
	(*Contract)(nil),            // 0: unpack.v1.contracts.Contract
	(*ir.EIP)(nil),              // 1: unpack.v1.ir.EIP
	(*ProxyImplementation)(nil), // 2: unpack.v1.contracts.ProxyImplementation
	(*Constructor)(nil),         // 3: unpack.v1.contracts.Constructor
	(*VulnerabilityMetric)(nil), // 4: unpack.v1.contracts.VulnerabilityMetric
	(*Vulnerability)(nil),       // 5: unpack.v1.contracts.Vulnerability
	(*sources.Sources)(nil),     // 6: unpack.v1.sources.Sources
}
var file_contracts_contract_proto_depIdxs = []int32{
	1, // 0: unpack.v1.contracts.Contract.standards:type_name -> unpack.v1.ir.EIP
	2, // 1: unpack.v1.contracts.Contract.implementations:type_name -> unpack.v1.contracts.ProxyImplementation
	3, // 2: unpack.v1.contracts.Contract.constructor:type_name -> unpack.v1.contracts.Constructor
	4, // 3: unpack.v1.contracts.Contract.vulnerability_metrics:type_name -> unpack.v1.contracts.VulnerabilityMetric
	5, // 4: unpack.v1.contracts.Contract.vulnerabilities:type_name -> unpack.v1.contracts.Vulnerability
	6, // 5: unpack.v1.contracts.Contract.sources:type_name -> unpack.v1.sources.Sources
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_contracts_contract_proto_init() }
func file_contracts_contract_proto_init() {
	if File_contracts_contract_proto != nil {
		return
	}
	file_contracts_vulnerability_proto_init()
	file_contracts_constructor_proto_init()
	file_contracts_proxy_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_contracts_contract_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Contract); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_contracts_contract_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_contracts_contract_proto_goTypes,
		DependencyIndexes: file_contracts_contract_proto_depIdxs,
		MessageInfos:      file_contracts_contract_proto_msgTypes,
	}.Build()
	File_contracts_contract_proto = out.File
	file_contracts_contract_proto_rawDesc = nil
	file_contracts_contract_proto_goTypes = nil
	file_contracts_contract_proto_depIdxs = nil
}
