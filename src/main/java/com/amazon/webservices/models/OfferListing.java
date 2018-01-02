/*
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package com.amazon.webservices.models;

import java.util.*;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class OfferListing 
        implements java.io.Serializable {
    private static final long serialVersionUID = 5238290506473565527L;
    private String offerListingId;
    private String pricePerUnit;
    private Price price;
    private Price salePrice;
    private Price amountSaved;
    private Integer percentageSaved;
    private String availability;
    private AvailabilityAttributes availabilityAttributes;
    private Boolean isEligibleForSuperSaverShipping;
    private Boolean isEligibleForPrimeFreeDigitalVideo;
    private Boolean isEligibleForPrime;
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("OfferListingId")
    public String getOfferListingId ( ) { 
        return this.offerListingId;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("OfferListingId")
    public void setOfferListingId (String value) { 
        this.offerListingId = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("PricePerUnit")
    public String getPricePerUnit ( ) { 
        return this.pricePerUnit;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("PricePerUnit")
    public void setPricePerUnit (String value) { 
        this.pricePerUnit = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("Price")
    public Price getPrice ( ) { 
        return this.price;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("Price")
    public void setPrice (Price value) { 
        this.price = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("SalePrice")
    public Price getSalePrice ( ) { 
        return this.salePrice;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("SalePrice")
    public void setSalePrice (Price value) { 
        this.salePrice = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("AmountSaved")
    public Price getAmountSaved ( ) { 
        return this.amountSaved;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("AmountSaved")
    public void setAmountSaved (Price value) { 
        this.amountSaved = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("PercentageSaved")
    public Integer getPercentageSaved ( ) { 
        return this.percentageSaved;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("PercentageSaved")
    public void setPercentageSaved (Integer value) { 
        this.percentageSaved = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("Availability")
    public String getAvailability ( ) { 
        return this.availability;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("Availability")
    public void setAvailability (String value) { 
        this.availability = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("AvailabilityAttributes")
    public AvailabilityAttributes getAvailabilityAttributes ( ) { 
        return this.availabilityAttributes;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("AvailabilityAttributes")
    public void setAvailabilityAttributes (AvailabilityAttributes value) { 
        this.availabilityAttributes = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("IsEligibleForSuperSaverShipping")
    public Boolean getIsEligibleForSuperSaverShipping ( ) { 
        return this.isEligibleForSuperSaverShipping;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("IsEligibleForSuperSaverShipping")
    public void setIsEligibleForSuperSaverShipping (Boolean value) { 
        this.isEligibleForSuperSaverShipping = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("IsEligibleForPrimeFreeDigitalVideo")
    public Boolean getIsEligibleForPrimeFreeDigitalVideo ( ) { 
        return this.isEligibleForPrimeFreeDigitalVideo;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("IsEligibleForPrimeFreeDigitalVideo")
    public void setIsEligibleForPrimeFreeDigitalVideo (Boolean value) { 
        this.isEligibleForPrimeFreeDigitalVideo = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("IsEligibleForPrime")
    public Boolean getIsEligibleForPrime ( ) { 
        return this.isEligibleForPrime;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("IsEligibleForPrime")
    public void setIsEligibleForPrime (Boolean value) { 
        this.isEligibleForPrime = value;
    }
 
}
 