/*
 * AWSECommerceServiceLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */
package com.amazon.webservices.models;

import java.util.*;
import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonSetter;

public class SimilarityLookupRequest 
        implements java.io.Serializable {
    private static final long serialVersionUID = 5238015569697489461L;
    private ConditionEnum condition;
    private List<String> itemId;
    private String merchantId;
    private List<String> responseGroup;
    private SimilarityTypeEnum similarityType;
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("Condition")
    public ConditionEnum getCondition ( ) { 
        return this.condition;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("Condition")
    public void setCondition (ConditionEnum value) { 
        this.condition = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("ItemId")
    public List<String> getItemId ( ) { 
        return this.itemId;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("ItemId")
    public void setItemId (List<String> value) { 
        this.itemId = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("MerchantId")
    public String getMerchantId ( ) { 
        return this.merchantId;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("MerchantId")
    public void setMerchantId (String value) { 
        this.merchantId = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("ResponseGroup")
    public List<String> getResponseGroup ( ) { 
        return this.responseGroup;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("ResponseGroup")
    public void setResponseGroup (List<String> value) { 
        this.responseGroup = value;
    }
 
    /** GETTER
     * TODO: Write general description for this method
     */
    @JsonGetter("SimilarityType")
    public SimilarityTypeEnum getSimilarityType ( ) { 
        return this.similarityType;
    }
    
    /** SETTER
     * TODO: Write general description for this method
     */
    @JsonSetter("SimilarityType")
    public void setSimilarityType (SimilarityTypeEnum value) { 
        this.similarityType = value;
    }
 
}
 