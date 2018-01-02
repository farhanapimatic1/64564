/**
  * @module AWSECommerceServiceLib
  *
  * TODO Enter a description
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const AWSECommerceServiceBindingController =
  require('./Controllers/AWSECommerceServiceBindingController');
const BinParameter = require('./Models/BinParameter');
const Bin = require('./Models/Bin');
const SearchBinSet = require('./Models/SearchBinSet');
const SimilarityTypeEnum = require('./Models/SimilarityTypeEnum');
const MetaData = require('./Models/MetaData');
const CartCreateRequest = require('./Models/CartCreateRequest');
const ActionEnum = require('./Models/ActionEnum');
const Item34 = require('./Models/Item34');
const BrowseNodeLookupRequest = require('./Models/BrowseNodeLookupRequest');
const Header = require('./Models/Header');
const Argument = require('./Models/Argument');
const MError = require('./Models/MError');
const CartCreateRequest55 = require('./Models/CartCreateRequest55');
const CorrectedQuery = require('./Models/CorrectedQuery');
const ItemLink = require('./Models/ItemLink');
const Language = require('./Models/Language');
const Price = require('./Models/Price');
const VariationAttribute = require('./Models/VariationAttribute');
const RelationshipEnum = require('./Models/RelationshipEnum');
const CollectionParent = require('./Models/CollectionParent');
const CollectionItem = require('./Models/CollectionItem');
const Collection = require('./Models/Collection');
const LoyaltyPoints = require('./Models/LoyaltyPoints');
const RentalOffer = require('./Models/RentalOffer');
const CustomerReviews = require('./Models/CustomerReviews');
const EditorialReview = require('./Models/EditorialReview');
const SimilarProduct = require('./Models/SimilarProduct');
const Accessory = require('./Models/Accessory');
const Disc = require('./Models/Disc');
const Property = require('./Models/Property');
const TopSeller = require('./Models/TopSeller');
const NewRelease = require('./Models/NewRelease');
const TopItemSet = require('./Models/TopItemSet');
const BrowseNodes = require('./Models/BrowseNodes');
const AlternateVersion = require('./Models/AlternateVersion');
const ItemSearchResponse = require('./Models/ItemSearchResponse');
const ItemLookupResponse = require('./Models/ItemLookupResponse');
const SimilarityLookupResponse = require('./Models/SimilarityLookupResponse');
const KeyValuePair = require('./Models/KeyValuePair');
const CartItems = require('./Models/CartItems');
const SavedForLaterItems = require('./Models/SavedForLaterItems');
const SimilarViewedProduct = require('./Models/SimilarViewedProduct');
const OtherCategoriesSimilarProduct = require('./Models/OtherCategoriesSimilarProduct');
const CartGetResponse = require('./Models/CartGetResponse');
const CartAddResponse = require('./Models/CartAddResponse');
const CartCreateResponse = require('./Models/CartCreateResponse');
const CartModifyResponse = require('./Models/CartModifyResponse');
const CartClearResponse = require('./Models/CartClearResponse');
const BrowseNodes243 = require('./Models/BrowseNodes243');
const BrowseNodeLookupResponse = require('./Models/BrowseNodeLookupResponse');
const SearchBinSets = require('./Models/SearchBinSets');
const AvailabilityEnum = require('./Models/AvailabilityEnum');
const AudienceRatingEnum = require('./Models/AudienceRatingEnum');
const ConditionEnum = require('./Models/ConditionEnum');
const PositiveIntegerOrAllEnum = require('./Models/PositiveIntegerOrAllEnum');
const ItemSearchRequest = require('./Models/ItemSearchRequest');
const ItemSearch = require('./Models/ItemSearch');
const IdTypeEnum = require('./Models/IdTypeEnum');
const ItemLookupRequest = require('./Models/ItemLookupRequest');
const ItemLookup = require('./Models/ItemLookup');
const SimilarityLookupRequest = require('./Models/SimilarityLookupRequest');
const SimilarityLookup = require('./Models/SimilarityLookup');
const CartGetRequest = require('./Models/CartGetRequest');
const CartGet = require('./Models/CartGet');
const Item = require('./Models/Item');
const Items = require('./Models/Items');
const CartAddRequest = require('./Models/CartAddRequest');
const CartAdd = require('./Models/CartAdd');
const Item23 = require('./Models/Item23');
const Items24 = require('./Models/Items24');
const CartCreate = require('./Models/CartCreate');
const Items35 = require('./Models/Items35');
const CartModifyRequest = require('./Models/CartModifyRequest');
const CartModify = require('./Models/CartModify');
const CartClearRequest = require('./Models/CartClearRequest');
const CartClear = require('./Models/CartClear');
const BrowseNodeLookup = require('./Models/BrowseNodeLookup');
const HTTPHeaders = require('./Models/HTTPHeaders');
const Arguments = require('./Models/Arguments');
const Errors = require('./Models/Errors');
const OperationRequest = require('./Models/OperationRequest');
const CartModifyRequest56 = require('./Models/CartModifyRequest56');
const Request = require('./Models/Request');
const SearchIndex = require('./Models/SearchIndex');
const SearchResultsMap = require('./Models/SearchResultsMap');
const ItemLinks = require('./Models/ItemLinks');
const DecimalWithUnits = require('./Models/DecimalWithUnits');
const Image = require('./Models/Image');
const ImageSet = require('./Models/ImageSet');
const ImageSets = require('./Models/ImageSets');
const CatalogNumberList = require('./Models/CatalogNumberList');
const Creator = require('./Models/Creator');
const EANList = require('./Models/EANList');
const ItemDimensions = require('./Models/ItemDimensions');
const Languages = require('./Models/Languages');
const PackageDimensions = require('./Models/PackageDimensions');
const NonNegativeIntegerWithUnits = require('./Models/NonNegativeIntegerWithUnits');
const UPCList = require('./Models/UPCList');
const ItemAttributes = require('./Models/ItemAttributes');
const VariationAttributes = require('./Models/VariationAttributes');
const RelatedItem = require('./Models/RelatedItem');
const RelatedItems = require('./Models/RelatedItems');
const CollectionSummary = require('./Models/CollectionSummary');
const Collections = require('./Models/Collections');
const Subjects = require('./Models/Subjects');
const OfferSummary = require('./Models/OfferSummary');
const Merchant = require('./Models/Merchant');
const OfferAttributes = require('./Models/OfferAttributes');
const AvailabilityAttributes = require('./Models/AvailabilityAttributes');
const OfferListing = require('./Models/OfferListing');
const Summary = require('./Models/Summary');
const Promotion = require('./Models/Promotion');
const Promotions = require('./Models/Promotions');
const Offer = require('./Models/Offer');
const Offers = require('./Models/Offers');
const RentalListing = require('./Models/RentalListing');
const RentalOffers = require('./Models/RentalOffers');
const VariationSummary = require('./Models/VariationSummary');
const VariationDimensions = require('./Models/VariationDimensions');
const Variations = require('./Models/Variations');
const EditorialReviews = require('./Models/EditorialReviews');
const SimilarProducts = require('./Models/SimilarProducts');
const Accessories = require('./Models/Accessories');
const Track = require('./Models/Track');
const Tracks = require('./Models/Tracks');
const Properties = require('./Models/Properties');
const Children = require('./Models/Children');
const Ancestors = require('./Models/Ancestors');
const TopSellers = require('./Models/TopSellers');
const NewReleases = require('./Models/NewReleases');
const TopItem = require('./Models/TopItem');
const BrowseNode = require('./Models/BrowseNode');
const AlternateVersions = require('./Models/AlternateVersions');
const Item133 = require('./Models/Item133');
const Items134 = require('./Models/Items134');
const Request162 = require('./Models/Request162');
const MetaData164 = require('./Models/MetaData164');
const CartItem = require('./Models/CartItem');
const SimilarViewedProducts = require('./Models/SimilarViewedProducts');
const OtherCategoriesSimilarProducts = require('./Models/OtherCategoriesSimilarProducts');
const Cart = require('./Models/Cart');
const Item253 = require('./Models/Item253');
const Items254 = require('./Models/Items254');
const RelatedItem264 = require('./Models/RelatedItem264');
const RelatedItems265 = require('./Models/RelatedItems265');
const Variations267 = require('./Models/Variations267');
const StringWithUnits = require('./Models/StringWithUnits');
const ItemSearchResponseMsg = require('./Models/ItemSearchResponseMsg');
const ItemLookupResponseMsg = require('./Models/ItemLookupResponseMsg');
const BrowseNodeLookupResponseMsg = require('./Models/BrowseNodeLookupResponseMsg');
const SimilarityLookupResponseMsg = require('./Models/SimilarityLookupResponseMsg');
const CartGetResponseMsg = require('./Models/CartGetResponseMsg');
const CartAddResponseMsg = require('./Models/CartAddResponseMsg');
const CartCreateResponseMsg = require('./Models/CartCreateResponseMsg');
const CartModifyResponseMsg = require('./Models/CartModifyResponseMsg');
const CartClearResponseMsg = require('./Models/CartClearResponseMsg');
const ItemSearchRequestMsg = require('./Models/ItemSearchRequestMsg');
const ItemLookupRequestMsg = require('./Models/ItemLookupRequestMsg');
const BrowseNodeLookupRequestMsg = require('./Models/BrowseNodeLookupRequestMsg');
const SimilarityLookupRequestMsg = require('./Models/SimilarityLookupRequestMsg');
const CartGetRequestMsg = require('./Models/CartGetRequestMsg');
const CartAddRequestMsg = require('./Models/CartAddRequestMsg');
const CartCreateRequestMsg = require('./Models/CartCreateRequestMsg');
const CartModifyRequestMsg = require('./Models/CartModifyRequestMsg');
const CartClearRequestMsg = require('./Models/CartClearRequestMsg');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of AWSECommerceServiceLib
    Configuration,
    Environments,
    // controllers of AWSECommerceServiceLib
    AWSECommerceServiceBindingController,
    // models of AWSECommerceServiceLib
    BinParameter,
    Bin,
    SearchBinSet,
    SimilarityTypeEnum,
    MetaData,
    CartCreateRequest,
    ActionEnum,
    Item34,
    BrowseNodeLookupRequest,
    Header,
    Argument,
    MError,
    CartCreateRequest55,
    CorrectedQuery,
    ItemLink,
    Language,
    Price,
    VariationAttribute,
    RelationshipEnum,
    CollectionParent,
    CollectionItem,
    Collection,
    LoyaltyPoints,
    RentalOffer,
    CustomerReviews,
    EditorialReview,
    SimilarProduct,
    Accessory,
    Disc,
    Property,
    TopSeller,
    NewRelease,
    TopItemSet,
    BrowseNodes,
    AlternateVersion,
    ItemSearchResponse,
    ItemLookupResponse,
    SimilarityLookupResponse,
    KeyValuePair,
    CartItems,
    SavedForLaterItems,
    SimilarViewedProduct,
    OtherCategoriesSimilarProduct,
    CartGetResponse,
    CartAddResponse,
    CartCreateResponse,
    CartModifyResponse,
    CartClearResponse,
    BrowseNodes243,
    BrowseNodeLookupResponse,
    SearchBinSets,
    AvailabilityEnum,
    AudienceRatingEnum,
    ConditionEnum,
    PositiveIntegerOrAllEnum,
    ItemSearchRequest,
    ItemSearch,
    IdTypeEnum,
    ItemLookupRequest,
    ItemLookup,
    SimilarityLookupRequest,
    SimilarityLookup,
    CartGetRequest,
    CartGet,
    Item,
    Items,
    CartAddRequest,
    CartAdd,
    Item23,
    Items24,
    CartCreate,
    Items35,
    CartModifyRequest,
    CartModify,
    CartClearRequest,
    CartClear,
    BrowseNodeLookup,
    HTTPHeaders,
    Arguments,
    Errors,
    OperationRequest,
    CartModifyRequest56,
    Request,
    SearchIndex,
    SearchResultsMap,
    ItemLinks,
    DecimalWithUnits,
    Image,
    ImageSet,
    ImageSets,
    CatalogNumberList,
    Creator,
    EANList,
    ItemDimensions,
    Languages,
    PackageDimensions,
    NonNegativeIntegerWithUnits,
    UPCList,
    ItemAttributes,
    VariationAttributes,
    RelatedItem,
    RelatedItems,
    CollectionSummary,
    Collections,
    Subjects,
    OfferSummary,
    Merchant,
    OfferAttributes,
    AvailabilityAttributes,
    OfferListing,
    Summary,
    Promotion,
    Promotions,
    Offer,
    Offers,
    RentalListing,
    RentalOffers,
    VariationSummary,
    VariationDimensions,
    Variations,
    EditorialReviews,
    SimilarProducts,
    Accessories,
    Track,
    Tracks,
    Properties,
    Children,
    Ancestors,
    TopSellers,
    NewReleases,
    TopItem,
    BrowseNode,
    AlternateVersions,
    Item133,
    Items134,
    Request162,
    MetaData164,
    CartItem,
    SimilarViewedProducts,
    OtherCategoriesSimilarProducts,
    Cart,
    Item253,
    Items254,
    RelatedItem264,
    RelatedItems265,
    Variations267,
    StringWithUnits,
    ItemSearchResponseMsg,
    ItemLookupResponseMsg,
    BrowseNodeLookupResponseMsg,
    SimilarityLookupResponseMsg,
    CartGetResponseMsg,
    CartAddResponseMsg,
    CartCreateResponseMsg,
    CartModifyResponseMsg,
    CartClearResponseMsg,
    ItemSearchRequestMsg,
    ItemLookupRequestMsg,
    BrowseNodeLookupRequestMsg,
    SimilarityLookupRequestMsg,
    CartGetRequestMsg,
    CartAddRequestMsg,
    CartCreateRequestMsg,
    CartModifyRequestMsg,
    CartClearRequestMsg,
    // exceptions of AWSECommerceServiceLib
    APIException,
};

module.exports = initializer;
