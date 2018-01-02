# This file was automatically generated by APIMATIC v2.0
# ( https://apimatic.io ).

module AwseCommerceService
  # CartGetResponse Model.
  class CartGetResponse < BaseModel
    # TODO: Write general description for this method
    # @return [OperationRequest]
    attr_accessor :operation_request

    # TODO: Write general description for this method
    # @return [List of Cart]
    attr_accessor :cart

    # A mapping from model property names to API property names.
    def self.names
      @_hash = {} if @_hash.nil?
      @_hash['operation_request'] = 'OperationRequest'
      @_hash['cart'] = 'Cart'
      @_hash
    end

    def initialize(operation_request = nil,
                   cart = nil)
      @operation_request = operation_request
      @cart = cart
    end

    # Creates an instance of the object from a hash.
    def self.from_hash(hash)
      return nil unless hash

      # Extract variables from the hash.
      operation_request = OperationRequest.from_hash(hash['OperationRequest']) if
        hash['OperationRequest']
      # Parameter is an array, so we need to iterate through it
      cart = nil
      unless hash['Cart'].nil?
        cart = []
        hash['Cart'].each do |structure|
          cart << (Cart.from_hash(structure) if structure)
        end
      end

      # Create object from extracted values.
      CartGetResponse.new(operation_request,
                          cart)
    end
  end
end
